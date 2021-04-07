// Complete the hourglassSum function below.
static int hourglassSum(int[][] arr) {
	
	int max = int.MinValue;

	for (int i = 0; i < arr.Length -2; i++)
	{
		for (int j = 0; j < arr.Length -2; j++)
		{
			int current = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
			max = max < current ? current : max;
		}
	}

	return max;
}