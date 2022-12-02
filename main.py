import json
import pprint


with open("rawBooks.json", "r") as file:
  my_data = json.load(file)

# pprint.pprint(my_data)

read_books = [data["title"] for data in my_data if data["read?"] == "Yes"]

pprint.pprint(read_books)
print(len(read_books))
  