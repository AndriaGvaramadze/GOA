from turtle import *

speed (30)
width (7)
color ()
begin_fill()
forward (200)


left (90)
forward (225)
left (90)
forward (200)
left (90)
forward (225)       
left (90) #end of square
end_fill()

forward (70)
left (90)
color ("red")
begin_fill()
forward (120) #height of the door
right (90)
forward (70)
right(90)
forward (120) #end of door
end_fill()



penup()#start of roof
goto (228,228)
right (90)
forward (30)
right (60)
pendown ()
color ("red")
begin_fill()
forward (160)

left (110)
forward (180)
end_fill()#end of roof

penup()#start of windows
width (3)
goto(145,145)
right (140)
pendown()
color ("red")
begin_fill()
forward (65)
right (90)
forward (48)
right (90)
forward (65)
right(90)
forward(48)
end_fill()
penup()#start of second window
forward (75)
right (90)
pendown()
color ("red")
begin_fill()
forward (65)
left(90)
forward(55)
left(90)
forward(65)
left (90)
forward (65)
end_fill()
exitonclick()