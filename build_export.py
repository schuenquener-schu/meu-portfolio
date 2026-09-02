import os
import shutil
import sys

def export_bundle(target_dir):
    src_dir = os.path.dirname(os.path.abspath(__file__))
    os.makedirs(target_dir, exist_ok=True)
    os.makedirs(os.path.join(target_dir, "css"), exist_ok=True)
    os.makedirs(os.path.join(target_dir, "js"), exist_ok=True)
    os.makedirs(os.path.join(target_dir, "assets"), exist_ok=True)

    # Copia arquivos base com extensao web padrao
    files_map = {
        "index.html.txt": "index.html",
        os.path.join("css", "style.css.txt"): os.path.join("css", "style.css"),
        os.path.join("js", "projects-data.js.txt"): os.path.join("js", "projects-data.js"),
        os.path.join("js", "main.js.txt"): os.path.join("js", "main.js"),
    }

    for src_rel, dst_rel in files_map.items():
        src_path = os.path.join(src_dir, src_rel)
        dst_path = os.path.join(target_dir, dst_rel)
        if os.path.exists(src_path):
            shutil.copyfile(src_path, dst_path)
            print(f"[Exportado] {dst_rel}")

    # Copia toda a pasta assets recursivamente
    src_assets = os.path.join(src_dir, "assets")
    dst_assets = os.path.join(target_dir, "assets")
    if os.path.exists(src_assets):
        shutil.copytree(src_assets, dst_assets, dirs_exist_ok=True)
        print("[Exportado] Pasta assets (todas as fotos dos sistemas)")

    print(f"\n[SUCESSO] Pacote completo compilado com sucesso em: {target_dir}")

if __name__ == '__main__':
    target = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.environ.get("TEMP", "."), "portfolio_vitor_dist")
    export_bundle(target)
