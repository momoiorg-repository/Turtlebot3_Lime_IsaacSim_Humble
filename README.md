# Turtlebot3 LimeでIsaac Sim と ROS 2 Humble の体験

このリポジトリには、Docker コンテナ内で NVIDIA Isaac Sim 4.5.0 と ROS 2 Humble 統合をセットアップするための設定ファイルとスクリプトが含まれています。
この環境を使用することで、Turllebot Limeのデモを含めたIsaac Sim 4.5.0の環境を構築することができます。



## 前提条件

- 最新ドライバーがインストールされた NVIDIA GPU
- NVIDIA Container Toolkit がインストールされた Docker
- 少なくとも 30GB の空きディスク容量
- Ubuntu 22.04 

## インストール方法

### 1. このリポジトリをクローンする

```bash
git clone https://github.com/umegan/Isaacsim_humble.git isaac_humble
cd isaac_humble
```

### 2. Docker イメージをビルドする

```bash
docker build -t isaac_ws:latest .
```

これにより、NVIDIA の Isaac Sim 4.5.0 イメージをベースに、ROS 2 Humble 統合を含むカスタム Docker イメージがビルドされます。

## 使用方法


### Isaac Sim の実行

1. Docker containerを起動する

```bash
isaac_sim_docker.sh
```

これによって、"isaac-sim-ws" dockerが起動し、docker内のshellによるプロンプトが表示されるはずです。

2. Isaac Sim を起動する:  
このshellセッションを用いて、起動したdocker内にIsaac Simを起動します。

```bash
runheadless
```

3. Omnivers Streaming Client から接続する:  
docker内でisaac simが起動すれば、他のノードからOmnivers Streaming Clientを用いて、それにアクセスできるようになります。
Omniverse Streaming Clientの、クライアントノードへのインストールは、下記を参照してください。

https://docs.isaacsim.omniverse.nvidia.com/4.5.0/installation/download.html

サーバ側のIPアドレスを記入して起動する必要があります。

4. Isaac SimでTurtleBot3 Limeを実行する  
Omnivers Streaming Clientを用いて起動したIsaac Sim内でTurtleBot3 Limeを動作させるためには、LimeのUSDを読み込む必要があります。LimeのUSDはこちらからダウンロードできます。

[Google Drive](https://drive.google.com/file/d/1zj03J05ni0jtlqXg845xG0uTzDkCmqzE/view?usp=sharing)

wget等を用いて取得し、使用してください。

## プロジェクト構造

```
.
├── LICENSE - MIT ライセンス
├── README.md - このファイル
├── Dockerfile - Isaac Sim + ROS 2 Humble イメージをビルドする
├── isaac_sim_docker.sh - Isaac Sim コンテナを実行するスクリプト
├── isaac-sim - dockerがマウントする永続ストレージ
```

## 注意事項

- Docker イメージは公式の NVIDIA Isaac Sim 4.5.0 イメージをベースに ROS 2 Humble を追加しています
- コンテナはホストの X11 サーバーを使用して GUI を表示します
- データの永続性はホストファイルシステムへのボリュームマウントによって管理されています
- RViz2 および一般的な ROS 2 ツールがコンテナにインストールされています

## ライセンス

このプロジェクトは MIT ライセンスの下で提供されています - 詳細はライセンスファイルをご覧ください。
