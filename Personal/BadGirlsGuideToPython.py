# Regex Syntax Notes:
# ? means 0 or 1 times
# * means 0 or more times
# + means 1 or more times
# {x,y} means that many times, at most that many times
# ^ means it must be at the beginning of a string
# $ means it must be at the end of a string
# re.I means to ignore the case

#-------------------------------------------------------------------------------------------------------------------------

# Shorthand Character Classes
# \d = Any numberic digit from 0 to 9
# \D = Any character that is NOT a numeric digit from 0 to 9
# \w = Any letter, numeric digit, or the underscore character (Think of this as matching 'word' characters)
# \W = Any character that is NOT a letter, numeric digit, or the underscore character
# \s = Any space, tab, or newline character (Think of this as matching 'space' characters)
# \S = Any character that is NOT a space, tab, or newline
# . = Any character that is not a new line
# .* = Anything whatsoever

#-------------------------------------------------------------------------------------------------------------------------

# How to Find Phone Numbers
# import re
# phoneRegex = re.compile(r'(\d\d\d-)?\d\d\d-\d\d\d\d') #This version means the first 3 digits are optional
# phoneRegex = re.compile(r'((\d\d\d)-(\d\d\d-\d\d\d\d))') #This version means it lists all the options
# mo = phoneRegex.search('My phone number is 415-555-1234. Call me tomorrow.')
# print(mo.group())
# mo = phoneRegex.search('My phone number is 555-1234. Call me tomorrow.')
# print(mo.group())

#-------------------------------------------------------------------------------------------------------------------------

# Find specific phrases
# import re
# batRegex = re.compile(r'Bat(man|mobile|copter|bat)')
# mo = batRegex.search('Batmobile lost a wheel')
# print(mo.group())

#-------------------------------------------------------------------------------------------------------------------------

# Find numbers and words
# import re
# lyrics = '12 drummers drumming, 11 pipers piping, 10 lords a leaping, 9 ladies dancing, 8 maids a milking, 7 swans a swimming, 6 geese a laying, 5 golden rings.'
# xmasRegex = re.compile(r'\d+\s\w+')
# mo = xmasRegex.findall(lyrics)
# print(mo)

#-------------------------------------------------------------------------------------------------------------------------

# Find the number of vowels
# import re
# vowelRegex = re.compile(r'[aeiouAEIOU]')
# mo = vowelRegex.findall('Robocop easts baby food')
# print(mo)

#-------------------------------------------------------------------------------------------------------------------------

# Find everything that's not a vowel
# import re
# vowelRegex = re.compile(r'[^aeiouAEIOU]')
# mo = vowelRegex.findall('Robocop easts baby food')
# print(mo)

#-------------------------------------------------------------------------------------------------------------------------

# Find values inside a standard string
# import re
# nameRegex = re.compile(r'First Name: (.*) Last Name: (.*)')
# mo = nameRegex.findall('First Name: Al Last Name: Smith')
# print(mo)
# OR
# import re
# serve = '<To serve humans> for dinner.>'
# nongreedy = re.compile(r'<(.*?)>')
# mo = nongreedy.findall(serve)
# print(mo)
# greedy = re.compile(r'<.*>')
# om = greedy.findall(serve)
# print(om)

# Find and Replace
# import re
# namesRegex = re.compile(r'Agent \w+')
# mo = namesRegex.findall('Agent Alice gave the secret documents to Agent Bob.')
# print(mo)
# om = namesRegex.sub('REDACTED','Agent Alice gave the secret documents to Agent Bob.')
# print(om)

#-------------------------------------------------------------------------------------------------------------------------

# Phone number and email scraper
# #! Python3

# import re, pyperclip

# # Create a regex for phone numbers
# phoneRegex = re.compile(r'''
# # 415-555-0000, 555-0000, (415) 555-000, 555-000 ext 12345, ext. 12345, x12345
# (
# ((\d\d\d)|(\(\d\d\d))?    # area code(optional)
# (\s|-)    # first separator
# \d\d\d    # first 3 digits
# -    # separator
# \d\d\d\d    # last 4 digits
# (((ext(\.)?\s) |x) # extension word-part(optional)
# (\d{2,5}))?    # extension number-part (optional)
# )
# ''', re.VERBOSE)

# # Create a regex for email addresses
# emailRegex = re.compile(r'''
# # Some.+_thing@Some.+_thing.com

# [a-zA-Z0-9_.+]+    # name part
# @    # @ symbol
# [a-zA-Z0-9_.+]+    # domain name part

# ''', re.VERBOSE)

# # Get the text off the clipboard
# text = pyperclip.paste()

# # Extract the email/phone from this text
# extractedPhone = phoneRegex.findall(text)
# extractedEmail = emailRegex.findall(text)

# allPhoneNumbers = []
# for phoneNumber in extractedPhone:
#     allPhoneNumbers.append(phoneNumber[0])
    
# # Copy the extraced email/phone to the clipboard 
# results = '\n'.join(allPhoneNumbers) + '\n' + '\n'.join(extractedEmail)
# pyperclip.copy(results)

#-------------------------------------------------------------------------------------------------------------------------

# Create folders and files with Python
# import os
# os.makedirs('c:\\Users\Lauren\Desktop\\Delicious\\wallnut\\waffles')

#-------------------------------------------------------------------------------------------------------------------------

# Copy a file to a new location and rename
# import shutil
# shutil.copy('c:\\users\\lauren\\desktop\\spam.txt', 'c:\\users\\lauren\\desktop\classes\\spamspamspam.txt')

#-------------------------------------------------------------------------------------------------------------------------

# Copy a folder with contents
# import shutil
# shutil.copytree('c:\\users\\lauren\\desktop\\classes', 'c:\\users\\lauren\\desktop\\classes_backup')

#-------------------------------------------------------------------------------------------------------------------------

# Move a file (Can be used to rename if you change the name and move to the same folder)
# import shutil
# shutil.move('c:\\users\\lauren\desktop\\spam.txt', 'c:\\users\\lauren\\desktop\\classes')

#-------------------------------------------------------------------------------------------------------------------------

# Delete a file
# import os
# os.unlink('c:\\users\\lauren\\desktop\spam.txt')

#-------------------------------------------------------------------------------------------------------------------------

# Delete an empty folder
# import os
# os.rmdir('c:\\users\\lauren\\desktop\spam')

#-------------------------------------------------------------------------------------------------------------------------

# Delete a folder with contents
# import shutil
# shutil.rmtree('c:\\users\\lauren\\desktop\\spam')

#-------------------------------------------------------------------------------------------------------------------------

# Send file to trash
# import send2trash
# send2trash.send2trash('c:\\users\\lauren\\desktop\\test.txt')

#-------------------------------------------------------------------------------------------------------------------------

# Walk a directory tree
# import os
# for folderName, subfolders, filenames in os.walk('c:\\users\\lauren\\desktop\\delicious'):
#     print('The folder is ' + folderName)
#     print('The subfolders in ' + folderName + ' are: ' + str(subfolders))
#     print('The filenames in ' + folderName + ' are: ' + str(filenames))
#     print()


#-------------------------------------------------------------------------------------------------------------------------

