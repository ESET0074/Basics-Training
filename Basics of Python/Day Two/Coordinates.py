#Program to compare x and y coordiantes
points=[]
for i in range(3):
    x=int(input("Enter x coordinate: "))
    y=int(input("Enter y coordinate: "))
    points.append((x,y))
for j in points:
    if(j[0]>j[1]):
        print(f"X coordinate  is greater than the Y coordinate for point ",j)
    elif(j[0]<j[1]):
        print(f"Y coordinate is greater than or equal to the X coordinate for point ",j)