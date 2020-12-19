import { APIs, postJSON, parseResult } from './common';
import $ from 'jquery'; 

export class ZaloPay {
    static listenCallback(apptransid, cb) {
        const ws = new WebSocket(APIs.SUBSCRIBE + "?apptransid=" + apptransid);
        console.log(APIs.SUBSCRIBE + "?apptransid=" + apptransid)
        console.log(ws)
        // ws.onopen = e => {
        //     console.log('open ws', apptransid);
        // };
        // ws.onmessage = e => {
        //     const data = JSON.parse(e.data);
        //     console.log('ws message', data);
        //     cb(data);
        //     alert('Thanh toán thành công');
        // };
        // ws.onclose = e => {
        //     console.log('close ws', apptransid);
        // };
    }

    static pay(url, data = {}, done) {
        return postJSON(url, data, done, () => {
            alert('Thanh toán thất bại');
        })
    }
  
    static qr(data, done) {
        ZaloPay.pay(APIs.QR, data, res => {
            if (res.returncode === 1) {
                console.log(res)
                done(res);
            } else {
                alert(parseResult(res));
            }
        });
    }

  static gateway(data) {
    ZaloPay.pay(APIs.GATEWAY, data, orderurl => {
      window.open(orderurl);
    });
  }

  static quickPay(data, done) {
    ZaloPay.pay(APIs.QUICKPAY, data, res => {
      if (res.returncode >= 1) {
        if (res.returncode === 1) {
          alert('Thanh toán thành công');
        } else {
          done(res);
        }
      } else {
        alert(parseResult(res));
      }
    });
  }

  static getbanklist(done) {
    $.getJSON(APIs.GETBANKLIST)
    .done(res => {
      if (res.returncode === 1) {
        const banklist = [];
        const { banks } = res;
        for (const id in banks) {
          const banklistOfId = banks[id];
          for (const bank of banklistOfId) {
            banklist.push(bank);
          }
        }
        done(banklist);
      } else {
        alert(parseResult(res));
      }
    })
    .fail(_ => alert('Không thể lấy danh sách ngân hàng'));
  }

  static refund(data, done) {
    return postJSON(APIs.REFUND, data, 
      res => {
        alert(parseResult(res));
        done(res);
      }, 
      () => {
        alert('Hoàn tiền thất bại');
      });
  }

  static getRefundStatus(mrefundid) {
    return $.getJSON(APIs.GETREFUNDSTATUS +'?mrefundid='+ mrefundid)
      .done(res => {
        alert(parseResult(res));
      })
      .fail(_ => alert('Không thể lấy trạng thái hoàn tiền'));
  }
}