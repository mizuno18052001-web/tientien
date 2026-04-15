const http = require('http');
const url = require('url');
const querystring = require('querystring');

const PORT = 3000;

// Telegram Bot Configuration
const BOT_TOKEN = '8303180543:AAE3dPXBZLq61wAoeENMRIiHMJiOdoiqSxc';
const CHAT_ID = '8466554460';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

const server = http.createServer(async (req, res) => {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Serve HTML file
    if (req.method === 'GET' && req.url === '/') {
        const fs = require('fs');
        fs.readFile('./BAITAPDAUTIEN.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
                return;
            }
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(data);
        });
        return;
    }

    // API endpoint
    if (req.method === 'POST' && req.url === '/api/send-message') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const { name, message } = data;

                if (!name || !message) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: 'Name and message required' }));
                    return;
                }

                // Format message
                const telegramMessage = `📨 <b>Tin nhắn mới từ Digital Profile</b>\n\n👤 <b>Tên:</b> ${name}\n💬 <b>Lời nhắn:</b> ${message}`;

                // Send to Telegram using built-in https module
                const https = require('https');
                const postData = JSON.stringify({
                    chat_id: CHAT_ID,
                    text: telegramMessage,
                    parse_mode: 'HTML'
                });

                const options = {
                    hostname: 'api.telegram.org',
                    path: `/bot${BOT_TOKEN}/sendMessage`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(postData)
                    }
                };

                const telegramReq = https.request(options, (telegramRes) => {
                    let telegramData = '';

                    telegramRes.on('data', chunk => {
                        telegramData += chunk;
                    });

                    telegramRes.on('end', () => {
                        try {
                            const result = JSON.parse(telegramData);
                            if (result.ok) {
                                console.log('✅ Message sent to Telegram');
                                res.writeHead(200);
                                res.end(JSON.stringify({
                                    success: true,
                                    message: 'Lời nhắn đã gửi thành công! 🎉'
                                }));
                            } else {
                                console.error('❌ Telegram error:', result);
                                res.writeHead(500);
                                res.end(JSON.stringify({
                                    error: 'Failed to send to Telegram',
                                    details: result.description
                                }));
                            }
                        } catch (e) {
                            res.writeHead(500);
                            res.end(JSON.stringify({ error: 'Parse error' }));
                        }
                    });
                });

                telegramReq.on('error', (error) => {
                    console.error('❌ Error:', error);
                    res.writeHead(500);
                    res.end(JSON.stringify({
                        error: 'Connection error',
                        details: error.message
                    }));
                });

                telegramReq.write(postData);
                telegramReq.end();

            } catch (error) {
                console.error('❌ Parse error:', error);
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📝 Mở: http://localhost:${PORT}`);
    console.log(`📱 Bot Token: ${BOT_TOKEN}`);
    console.log(`💬 Chat ID: ${CHAT_ID}`);
});

