#!/bin/bash
# start_isaac_sim_local.sh
#
# このスクリプトは、サーバのローカルXサーバー（通常 DISPLAY=:0）にコンテナ内のGUIアプリケーションを表示するための例です。

# サーバのローカルXサーバーへのアクセスを許可
xhost +

docker run --name isaac-sim-ws -it --rm \
  --runtime=nvidia --gpus all \
  -e "ACCEPT_EULA=Y" \
  -e "PRIVACY_CONSENT=Y" \
  --network host \
  --entrypoint /bin/bash \
  -e DISPLAY=$DISPLAY \
  -v ./isaac_sim/cache/kit:/isaac-sim/kit/cache:rw \
  -v ./isaac_sim/cache/ov:/root/.cache/ov:rw \
  -v ./isaac_sim/cache/pip:/root/.cache/pip:rw \
  -v ./isaac_sim/cache/glcache:/root/.cache/nvidia/GLCache:rw \
  -v ./isaac_sim/cache/computecache:/root/.nv/ComputeCache:rw \
  -v ./isaac_sim/logs:/root/.nvidia-omniverse/logs:rw \
  -v ./isaac_sim/data:/root/.local/share/ov/data:rw \
  -v ./isaac_sim/documents:/root/isaac-sim/Documents:rw \
  -v /tmp/.X11-unix:/tmp/.X11-unix:rw \
  -v $HOME/.Xauthority:/root/.Xauthority:ro \
  isaac_ws:latest
