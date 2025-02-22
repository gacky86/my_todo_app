Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001' # ReactサーバーのURL
    resource '*', # すべてのエンドポイントに適用
      headers: :any, # すべてのヘッダーを許可
      expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'], # exposeの行を追加することで、ブラウザからアクセスできるヘッダー情報を指定します(devise-auth)
      methods: [:get, :post, :put, :patch, :delete, :options, :head] # 許可するHTTPメソッドを定義
  end
end
