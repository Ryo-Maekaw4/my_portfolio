FROM node:18-alpine

WORKDIR /app

# パッケージファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# Next.jsアプリケーションをビルド
RUN npm run build

# 本番用ポートを開放
EXPOSE 3000

# Next.jsアプリケーションを起動
CMD ["npm", "run", "start"]