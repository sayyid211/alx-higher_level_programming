#!/usr/bin/python3

def element_at(my_list, idx):
    """Retrieve an element from a list"""
    if idx not in range(len(my_list) - 1):
        return (None)
    return (my_list[idx])
