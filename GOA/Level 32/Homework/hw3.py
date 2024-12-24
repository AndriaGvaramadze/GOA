def human_years_cat_years_dog_years(human_years):
    if human_years == 1:
        return [1, 15, 15]  # For the first year, cat and dog are 15 years old.
    elif human_years == 2:
        return [2, 24, 24]  # For the second year, cat and dog are both 24 years old (15 + 9).
    else:
        # For years greater than 2, calculate the additional years.
        cat_years = 24 + (human_years - 2) * 4  # After the first two years, each yea

