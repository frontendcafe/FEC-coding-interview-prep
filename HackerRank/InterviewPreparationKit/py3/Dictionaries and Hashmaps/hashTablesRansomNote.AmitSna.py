def checkMagazine(magazine, note):

    mag_dict = {}
    for word in magazine:
        if word in mag_dict.keys():
            mag_dict[word] += 1
        else:
            mag_dict[word] = 1

    note_dict = {}
    for word in note:
        if word in note_dict.keys():
            note_dict[word] += 1
        else:
            note_dict[word] = 1
    
    for word in note_dict.keys():
        if word not in mag_dict.keys() or note_dict[word] > mag_dict[word]:
            print("No")
            return

    print("Yes")
