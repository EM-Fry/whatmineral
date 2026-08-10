import os
os.listdir("C:/Users/eargr/Pictures/Mineral Photos")

for min in os.listdir("C:/Users/eargr/Pictures/Mineral Photos"):
    directoryList = os.listdir("C:/Users/eargr/Pictures/Mineral Photos/" + min)
    print(r'"' + min + r'": ' + str(directoryList) + ',')

for min in os.listdir("C:/Users/eargr/Documents/VScode/WhatMineral/Images"):
    print(r'<option value="' + min + r'">')