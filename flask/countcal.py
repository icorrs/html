#coding=utf-8
from flask import Flask

app = Flask(__name__)

@app.route('/',methods=['post'])
def countcal():
    full = request.form['full']
    countdown = request.form['countdown']
    price = request.form['price']
    if full%price == 0:
        num = full%price
        real_price = (full-countdown)/num       
    else:
        num = (full-full%price)/price
        real_price = (full-full%price-countdown)/num
    return '数量：%s;真实价格：%s;'%(num,real_price)
    