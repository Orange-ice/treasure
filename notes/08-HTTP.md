## HTTP

### 几个特殊的IP

- `127.0.0.1`   表示自己
- `localhost`  通过 hosts 指定为自己
- `0.0.0.0`  不表示任何设备

> hosts 文件在哪？
>
> 答： 在 Windows 系统中，hosts 位于 C:\Windows\System32\drivers\etc\hosts 。在 macOS / Linux系统中，hosts 位于 /etc/hosts



### 端口 port

![2020-06-10_113439](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611131719.jpg)





![2020-06-10_113525](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611131541.jpg)



==IP 和端口缺一不可==



### 域名

**域名就是对 IP 的别称**

![2020-06-10_113710](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611131819.jpg)



**域名和 IP 时怎么对应起来的**     ==通过DNS==

![2020-06-10_113811](D:\jirengu\notes\images\2020-06-10_113811.jpg)



### URL

==协议 + 域名或IP + 端口号 + 路径 + 查询字符串 + 锚点==



### curl 命令

![2020-06-10_114016](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611131849.jpg)





### HTTP 请求与响应

![2020-06-11_090650](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611131915.jpg)



**如何发请求**

- 方法

  用 Chrome 地址栏

  用 curl 命令

- 概念

  帮你发请求的工具叫做【用户代理】

  英文名 User Agent



**如何做出一个响应**

- 需编程-----Node.js 有一个 http模块可以做到

- 注意事项

  ![2020-06-11_091208](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611132007.jpg)



**代码逻辑**

![2020-06-11_091311](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611132025.jpg)



#### HTTP 基础概念

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611132031.jpg" alt="2020-06-11_091421" style="zoom:80%;" />

![2020-06-11_091508](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611132035.jpg)



#### 用 `curl`  构造请求

![2020-06-11_091603](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611132039.jpg)

#### 用Node.js 读取请求



![2020-06-11_091706](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611132042.jpg)

#### 用 Node.js 设置响应

![2020-06-11_091801](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611132046.jpg)





### 购买服务器

![image-20200611134905937](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611134906.png)



![image-20200611135010045](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135010.png)



![image-20200611135049870](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135049.png)





**SSH 远程登陆**

![image-20200611135207158](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135207.png)



![image-20200611135236301](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135236.png)



![image-20200611135331644](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135331.png)



![image-20200611135405026](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135405.png)



![image-20200611135452730](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135452.png)

![image-20200611135510344](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135510.png)

![image-20200611135522811](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135522.png)

![image-20200611135532034](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135532.png)

![image-20200611135542539](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135542.png)

![image-20200611135552427](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611135552.png)



#### ssh 远程登陆

```
echo '复制本地~/.ssh/id_rsa.pub内容' >> ~/.ssh/authorized_keys
```

#### 防止ssh卡住

```
echo "Host *" >> /etc/ssh/ssh_config
echo "  ServerAliveInterval 30" >> /etc/ssh/ssh_config
```

#### 创建应用账户

```
adduser frank
mkdir  /home/frank/.ssh
cp ~/.ssh/authorized_keys /home/frank/.ssh/
chmod 755 /home/frank/.ssh/authorized_keys
chown frank:frank /home/frank/.ssh/authorized_keys

adduser frank sudo
```

#### 安装 node.js 8

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo sed -i 's/deb.nodesource.com\/node_8.x/mirrors.tuna.tsinghua.edu.cn\/nodesource\/deb_8.x/g' /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt-get install -y nodejs
node -v
npm -v
npx -v

sudo apt install git
```

#### 部署应用

```
git clone https://github.com/FrankFang/nodejs-test.git
cd nodejs-test
touch log
启动命令：node server.js 8888 > log 2>&1 &
把启动命令做成 start 文件
添加执行权限 chmod +x ./start
运行 sh ./start 得到一个进程号 pid
tail log 看 log 内容
kill -9 pid 可以关掉进程
killall node 可以关掉所有 node 进程
```

#### 如何重启应用

```
ssh frank@实例ip
cd nodejs-test
git pull
killall node（因为忘了进程号，实际上可以记下来）
sh ./start
```

