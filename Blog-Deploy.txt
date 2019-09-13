cd C:\Users\Administrator\Desktop\Ghost
wget -r -nH -P docs -E -T 2 -np -k https://homolog.meseems.com.br/blog/
cd C:\Users\Administrator\Desktop\Ghost\docs\blog
git add .
git commit -m "refreshpost"
git push