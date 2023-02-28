import winston from 'winston';
import {join}from 'path';

export const logger = winston.createLogger({
    // format của log được kết hợp thông qua format.combine
    format: winston.format.combine(
        winston.format.splat(),
        //định dạng time cho log
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        // thêm màu sắc (đỏ)
        // winston.format.colorize(),
        // thiết lập định dạng của log
        winston.format.printf(log => {
// nếu log là error hiển thị stack trace còn không hiển thị message của log
                if(log.stack) return `[${log.timestamp}]  [${log.level}] ${log.stack}`;
                return `[${log.timestamp}] [${log.level}] ${log.message}`
            },
        ),
    ),
    transports: [
        // hiển thị log thông qua console
        new winston.transports.Console(),
        // Thiết lập ghi các errors vào file
        new winston.transports.File({// config để lưu log vào file.
            dirname: join(__dirname,'../../../var/log/'),//Đường dẫn file.
            filename: 'error.log',//Tên file để lưu trữ.
            level: 'error',//ghi log
        })
    ],
});
//Ở đây chúng ta tạo file cấu hình cho winston và export nó ra
// để có thể sử dụng ở các file khác.