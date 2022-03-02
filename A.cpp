#include<bits/stdc++.h>
using namespace std;

struct Node
{
	int key;
	struct Node *left, *right;
};


Node* newNode(int key)
{
	Node* temp = new Node;
	temp->key = key;
	temp->left = temp->right = NULL;
	return (temp);
}


void printPathsUtil(Node* curr_node, int sum,
			int sum_so_far, vector<int> &path)
{
	if (curr_node == NULL)
		return;


	sum_so_far += curr_node->key;


	path.push_back(curr_node->key);


	if (sum_so_far == sum )
	{
		cout << "Path found: ";
		for (int i=0; i<path.size(); i++)
			cout << path[i] << " ";

		cout << endl;
	}


	if (curr_node->left != NULL)
		printPathsUtil(curr_node->left, sum, sum_so_far, path);


	if (curr_node->right != NULL)
		printPathsUtil(curr_node->right, sum, sum_so_far, path);


	
	path.pop_back();
}


void printPaths(Node *root, int sum)
{
	vector<int> path;
	printPathsUtil(root, sum, 0, path);
}


int main ()
{

	Node *root = newNode(10);
	root->left = newNode(28);
	root->right = newNode(13);

	root->right->left = newNode(14);
	root->right->right = newNode(15);

	root->right->left->left = newNode(21);
	root->right->left->right = newNode(22);
	root->right->right->left = newNode(23);
	root->right->right->right = newNode(24);

	int sum = 38;

	printPaths(root, sum);

	return 0;
}