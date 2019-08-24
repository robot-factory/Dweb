# go-ethereum项目分析

## 资源
1. https://github.com/ZtesoftCS/go-ethereum-code-analysis
2. https://github.com/miguelmota/ethereum-development-with-go-book


## 项目结构和模块划分
go-ethereum项目的组织结构基本上是按照功能模块划分的目录，下面简单介绍一下各个目录的结构，每个目录在GO语言里面又被成为一个Package,我理解跟Java里面的Package应该是差不多的意思。

```shell
accounts            实现了一个高等级的以太坊账户管理
bmt            二进制的默克尔树的实现
build            主要是编译和构建的一些脚本和配置
cmd            命令行工具，又分了很多的命令行工具，下面一个一个介绍
  /abigen        Source code generator to convert Ethereum contract definitions into easy to use, compile-time type-safe Go packages
  /bootnode    启动一个仅仅实现网络发现的节点
  /evm        以太坊虚拟机的开发工具， 用来提供一个可配置的，受隔离的代码调试环境
  /faucet  
  /geth        以太坊命令行客户端，最重要的一个工具
  /p2psim        提供了一个工具来模拟http的API
  /puppeth    创建一个新的以太坊网络的向导
  /rlpdump     提供了一个RLP数据的格式化输出
  /swarm        swarm网络的接入点
  /util        提供了一些公共的工具
  /wnode        这是一个简单的Whisper节点。 它可以用作独立的引导节点。此外，可以用于不同的测试和诊断目的。
common            提供了一些公共的工具类
compression        Package rle implements the run-length encoding used for Ethereum data.
consensus        提供了以太坊的一些共识算法，比如ethhash, clique(proof-of-authority)
console            console类
contracts
core            以太坊的核心数据结构和算法(虚拟机，状态，区块链，布隆过滤器)
crypto            加密和hash算法，
eth            实现了以太坊的协议
ethclient        提供了以太坊的RPC客户端
ethdb            eth的数据库(包括实际使用的leveldb和供测试使用的内存数据库)
ethstats        提供网络状态的报告
event            处理实时的事件
les            实现了以太坊的轻量级协议子集
light            实现为以太坊轻量级客户端提供按需检索的功能
log            提供对人机都友好的日志信息
metrics            提供磁盘计数器
miner            提供以太坊的区块创建和挖矿
mobile            移动端使用的一些warpper
node            以太坊的多种类型的节点
p2p            以太坊p2p网络协议
rlp            以太坊序列化处理
rpc            远程方法调用
swarm            swarm网络处理
tests            测试
trie            以太坊重要的数据结构Package trie implements Merkle Patricia Tries.
whisper            提供了whisper节点的协议。
```

## p2p部分源码分析
p2p的源码又下面几个包

- discover 包含了Kademlia协议。是基于UDP的p2p节点发现协议。
- discv5	新的节点发现协议。 还是试验属性。本次分析没有涉及。
- nat	网络地址转换的部分代码
- netutil	一些工具
- simulations	p2p网络的模拟。 本次分析没有涉及。
- encode？
- enr？

discover部分的源码分析

- 发现的节点的持久化存储 database.go
- Kademlia协议的核心逻辑 tabel.go
- UDP协议的处理逻辑udp.go
- 网络地址转换 nat.go
- 时间校对 ntp.go

p2p/ 部分源码分析

- 节点之间的加密链路处理协议 rlpx.go
- 挑选节点然后进行连接的处理逻辑 dail.go
- 节点和节点连接的处理以及协议的处理 peer.go
- p2p服务器的逻辑 server.go
