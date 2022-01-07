import os


os.system("rm process.txt")
os.system("lsof -i:4000 >> process.txt")

pids = ["8163"]

for pid in pids:
    os.system(f"kill {pid}")