# P2P相关知识

## 目标是搭建一套类似zeronet的去中心化网站框架
nodejs实现或go实现

##　计划
通过了解p2p相关项目理解p2p的协议及原理

## 项目
[X] node-nat-upnp
[X] node-nat-pmp
[] bittorrent-dht https://github.com/webtorrent/bittorrent-dht
[] js libp2p https://github.com/libp2p/js-libp2p
[] js-ipfs

## nat常用的几种方案

1. nat-upnp
参看node-nat-upnp，最后发现upnp只能做一级路由的映射。允悲。TT好难过啊。。。。那为什么以太坊的代码里是有upnp的？

2. nat-pmp
看完映射部分，但不明白能否映射多级，是否最后还是要通过打洞来实现穿透

