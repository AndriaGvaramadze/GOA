def human_years_cat_years_dog_years(human_years):
    if human_years == 1:
        return [1, 15, 15]  # On the first human year, the cat and dog are both 15 years old.
    elif human_years == 2:
        return [2, 24, 24]  # On the second human year, the cat and dog are both 24 years old.
    else:
        # For human years greater than 2, calculate the additional years.
        cat_years = 24 + (human_years - 2) * 4  # Each additional human year after year 2 counts as 4 cat years.
        dog_years = 24 + (human_years - 2) * 5  # Each additional human year after year 2 counts as 5 dog years.
        return [human_years, cat_years, dog_years]  # Return the list with human, cat, and dog years.
