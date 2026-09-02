import http.server
import socketserver
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class PortfolioHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        path = self.path.split('?')[0]
        
        if path == '/' or path == '/index.html':
            self.serve_custom_file('index.html.txt', 'text/html; charset=utf-8')
            return
        elif path == '/css/style.css':
            self.serve_custom_file(os.path.join('css', 'style.css.txt'), 'text/css; charset=utf-8')
            return
        elif path == '/js/projects-data.js':
            self.serve_custom_file(os.path.join('js', 'projects-data.js.txt'), 'application/javascript; charset=utf-8')
            return
        elif path == '/js/main.js':
            self.serve_custom_file(os.path.join('js', 'main.js.txt'), 'application/javascript; charset=utf-8')
            return
        
        super().do_GET()

    def serve_custom_file(self, rel_path, content_type):
        full_path = os.path.join(DIRECTORY, rel_path)
        if not os.path.exists(full_path):
            self.send_error(404, "Arquivo nao encontrado")
            return
        
        try:
            with open(full_path, "rb") as f:
                data = f.read()
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "no-cache")
            self.end_headers()
            self.wfile.write(data)
        except Exception as e:
            self.send_error(500, f"Erro interno: {str(e)}")

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), PortfolioHTTPRequestHandler) as httpd:
        print(f"\n[PORTFOLIO SERVER] Rodando com sucesso!")
        print(f"URL: http://localhost:{PORT}")
        print(f"Pressione Ctrl+C para encerrar.\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor encerrado.")
