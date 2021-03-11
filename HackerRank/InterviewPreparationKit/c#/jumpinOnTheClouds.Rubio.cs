// Complete the jumpingOnClouds function below.
static int jumpingOnClouds(int[] c) {
	
	int output = 0;
	for (int i=0; i < c.Count(); i++)
	{
		if(i+2 < c.Count() && c[i+2] == 0)
		{
			i++;
			output++;
		}
		else if(i+1 < c.Count())
		{
			output++;
		}
	}
	return output;

}