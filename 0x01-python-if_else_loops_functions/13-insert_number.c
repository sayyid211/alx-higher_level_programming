#include "lists.h"
#include <stdlib.h>

/**
 * insert_node - add node to a linked list
 * @head: list head
 * @number: node val  to insert
 * Return: Pointer to new node or Null on failure
 */

listint_t *insert_node(listint_t **head, int number)
{
	listint_t *node = *head, new;

	new = malloc(sizeof(listint_t));
	if (!new)
		return (NULL);
	new->n = number;

	if (node == NULL || node->n >= number)
	{
		new->next = node;
		*head = new;
		return (new);
	}

	while (node && node->next && node->next->n < number)
		node = node->next;
	new->next = node->next;
	node->next = new;
	return (new);
}
