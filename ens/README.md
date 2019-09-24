# ENS(Ethereum Name Service)

## 什么是ENS？
EthDNS 由两个部分组成：一个是以太坊域名服务（ENS）解析器，另一个是域名服务器。前者允许在区块链上存储和访问 DNS 信息，后者允许使用与保存在传统域名服务器上的同等 DNS 信息的方式访问 DNS 信息。

这两个部分相结合，将域名解析基础设施图变成了下面的样子：
![包含提供my.xyz服务的 EthDNS 的 DNS 域名服务器基础结构](./img/2019-09-24-18-06-35.png)

my.xyz域名的域名服务器已经被配置为从以太坊区块链而非本地存储中获取信息，在图片中以右下角的以太坊符号表示。请注意，域名解析过程与上一张图片记录的过程完全相同，并且客户端不知道信息是从区块链返回的。 这使得 EthDNS 可以替换现有的域名服务器并与现有基础设施无缝配合。

目前（很久以前了）EthDNS 在以太坊的Ropsten测试网络上运行着由ENS支持的域名服务器。例如，如果您访问 http://www.ensdns.xyz ,www.ensDNS.xyz 的IP地址是由 EthDNS 域名服务器解析的。

## 网站
官网        https://ens.domains/
域名管理    https://manager.ens.domains
github     https://github.com/ensdomains

## 域名销售
