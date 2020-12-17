import React from 'react'
import '../../Styles/Home.css'
import '../../App.css' 

export default function ProductAsk() { 
    return (
        <div className="ProductAsk">
            <div className="invitejoin">
                <div className="invitejoin-title">
                    <strong>Những câu hỏi</strong> thường gặp (FAQs)
                </div>
                <div className="ask-content flex">
                    <div className="ask-list">
                        <div className="ask-item">
                            <div className="ask-title">Phạm vi định vị của Tractive GPS?</div>
                            <div className="ask-text">Không giới hạn. Trên thực tế, bạn có thể định vị thú cưng của bạn nếu bạn ở trên trái đất và nó hoạt động ở 130 đất nước.</div>
                        </div>
                        <div className="ask-item">
                            <div className="ask-title">Làm cách nào để Tractive GPS hoạt động?</div>
                            <div className="ask-text">Nó kết nối tới thiết bị mạng có sẵn như một chiếc điện thoại để cung cấp vị trí nơi vật nuôi đã đi qua.</div>
                        </div>
                    </div>
                    <div className="ask-list">
                        <div className="ask-item">
                            <div className="ask-title">Tractive GPS có dùng cho mèo được không?</div>
                            <div className="ask-text">Có. Thiết bị được thiết kế để phù hợp với mọi loại chó và mèo.</div>
                        </div>
                        <div className="ask-item">
                            <div className="ask-title">Hệ thống giám sát là gì và nó hoạt động ra sao?</div>
                            <div className="ask-text">Nó sẽ yêu cầu bạn cung cấp thông tin về mức độ hoạt độg của thú cưng của bạn. Với thông tin đó nó có thể xác định được cấp độ hoạt động của thú cưng.</div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}