// ==================== script.js ====================

// Tailwind CDN 初始化（仅用于开发预览，生产环境可移除）
function initializeTailwind() {
    return {
        config(userConfig = {}) {
            return {
                configUser: {
                    ...userConfig,
                },
                theme: {
                    extend: {},
                },
            }
        },
        theme: {
            extend: {},
        },
    }
}

// 页面加载完成提示
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✅ 蓝色星原旅谣插件功能列表模板加载完成\n宽度：830px | 占位符就绪 | 等待后端拼接',
        'color:#3b82f6; font-family:monospace; font-size:13px; padding:2px 6px; border-radius:4px; background:#f0f9ff');

    console.log('%c📌 所有 {{占位符}} 已准备好，后端可直接使用模板引擎替换',
        'color:#64748b; font-size:12px');

    // 示例：为所有功能卡片添加点击事件（实际由后端决定如何触发指令）
    const cards = document.querySelectorAll('.function-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const command = card.getAttribute('data-command');
            if (command) {
                console.log(`🔥 执行指令：${command}`);
                // 这里可以后续扩展为 postMessage 或调用机器人API
            }
        });
    });

    // 未来可扩展的JS功能（搜索、折叠等）均可在此文件中添加
});