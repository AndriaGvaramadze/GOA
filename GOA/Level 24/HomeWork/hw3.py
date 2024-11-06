#Grade book
#Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

#Numerical Score	Letter Grade
#90 <= score <= 100	'A'
#80 <= score < 90	'B'
#70 <= score < 80	'C'
#60 <= score < 70	'D'
#0 <= score < 60	'F'
def get_grade(score1, score2, score3):
    # Calculate the average of the three scores
    average_score = (score1 + score2 + score3) / 3
    
    # Determine the letter grade based on the average score
    if 90 <= average_score <= 100:
        return 'A'
    elif 80 <= average_score < 90:
        return 'B'
    elif 70 <= average_score < 80:
        return 'C'
    elif 60 <= average_score < 70:
        return 'D'
    else:
        return 'F'

# Example usage:
print(get_grade(85, 90, 92))  # Output: 'A'
print(get_grade)(75, 70)