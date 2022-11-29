// 名称任意，按照个人习惯来
module.exports = {
    apps: [
        {
            name: 'wiki-service', // 应用名称
            script: './dist/main.js', // 启动文件地址
            cwd: './', // 当前工作路径
            watch: [
                // 监控变化的目录，一旦变化，自动重启
                'dist',
            ],
            ignore_watch: [
                // 忽视这些目录的变化
                'node_modules',
                'logs',
                'public',
            ],
            env_production: {
                NODE_ENV: 'production',
            },
            merge_logs: true,
            log_date_format: 'YYYY-MM-DD HH:mm Z',
        },
    ],
}
