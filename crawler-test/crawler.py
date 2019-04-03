from bs4 import BeautifulSoup
import csv
 
with open("crawler-test/index.html") as fp:
     soup = BeautifulSoup(fp)

with open('crawler-test/Book1.csv', mode="w") as Book1:
    Book1Write = csv.writer(Book1, delimiter=",", quotechar='"', quoting=csv.QUOTE_MINIMAL)

    for i in range(len(soup.find_all("h1"))):
        Book1Write.writerow(soup.find_all("h1")[i])


title = soup.head.contents[0].string
print(title)

