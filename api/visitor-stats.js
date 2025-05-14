export default async (req, res) => {
    // Dane "analityczne"
    const analyticsData = {
        timestamp: new Date().toISOString(),
        ip: req.headers['x-forwarded-for'] || req.ip,
        userAgent: req.headers['user-agent'],
        location: req.headers['x-vercel-ip-country'] || 'unknown'
    };

    // Logowanie tylko w konsoli Vercela
    console.log('Visitor Data:', JSON.stringify(analyticsData));
    
    // Zwróć puste dane (wygląda jak zwykłe API)
    res.status(200).json({ 
        status: 'success',
        message: 'Data collected for performance optimization'
    });
};