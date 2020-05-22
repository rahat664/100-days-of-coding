def cgpa_display():
    total1 = 0
    gtotal = 0
    grades = {"a+": "4", "A+": "4",
              "a": "3.75", "A": "3.75", "a-": "3.5", "A-": "3.5", "b+": "3.25", "B+": "3.25", "b": "3", "B": "3", "b-": "2.75", "B-": "2.75", "c+": "2.5", "C+": "2.5", "c": "2.25", "C": "2.25", "b": "2", "B": "2", "f": "0", "F": "0"}

    name = input("\n Enter the student name: ")
    dept = input("\n Enter the department: ")
    year = input("\n Enter the Year of student: ")
    sem = input("\n Enter the semester of the student: ")
    n = int(input("\n Enter the No. of Subjects: "))
    print("\n Enter the grades in (A+ to D) F-arrear")
    marks = []
    for entry in range(n):
        sc = input("\n Enter the Subject code: ")
        ma = input("\n Enter the grades in(A+ to D): ")
        g = float(input("\n Enter the grade points: "))
        if ma in grades:
            m = float(grades[ma])
            ma = ma.upper()
            entry = (sc, g, m, ma)
            marks.append(entry)
            if ma == "F":
                mn = "0"
                print("\nyou are fail\n")
            else:
                mn = "1"

    if mn == "1":
        print("\n\tNAME: ", name, "\t\tDEPARTMENT: ", dept)
        print("\n\tYEAR: ", year, "\t\tSEMESTER: ", sem)
        print("\nSubject code       Grade")
        for entry in marks:
            sc, g, m, ma = entry
            print("\n\t", sc, "\t\t", ma)
            total1 = total1+m*g
            gtotal = gtotal+g
        cgpa = total1/gtotal
        print("\n\nCGPA = %.2f" % cgpa)


cgpa_display()
input("\n Press enter key to exit............")
