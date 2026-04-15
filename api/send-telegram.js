export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, message } = req.body;

        if (!name || !message) {
            return res.status(400).json({ error: 'Name and message are required' });
        }

        // Telegram Bot Configuration
        const BOT_TOKEN = '8303180543:AAE3dPXBZLq61wAoeENMRIiHMJiOdoiqSxc';
        const CHAT_ID = '8466554460';
        const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        // Format message
        const telegramMessage = `
📨 <b>Tin nhắn mới từ Digital Profile</b>

👤 <b>Tên:</b> ${name}
💬 <b>Lời nhắn:</b> ${message}
        `.trim();

        // Send to Telegram
        const response = await fetch(TELEGRAM_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.description || 'Failed to send message to Telegram');
        }

        console.log('✅ Message sent to Telegram:', result);

        return res.status(200).json({
            success: true,
            message: 'Lời nhắn đã gửi thành công! 🎉',
            telegramResponse: result
        });

    } catch (error) {
        console.error('❌ Error:', error.message);
        return res.status(500).json({
            error: 'Có lỗi khi gửi lời nhắn. Vui lòng thử lại.',
            details: error.message
        });
    }
}
