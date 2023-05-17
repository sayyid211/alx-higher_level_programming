#!/usr/bin/python3

def safe_print_integer(value):
    """prints an  integer
    Args:
        value: val to print
    Returns:
            Number of integers printed
    """
    try:
        print("{:d}".format(value), end='')
        return True
        except (TypeError):
        return False
