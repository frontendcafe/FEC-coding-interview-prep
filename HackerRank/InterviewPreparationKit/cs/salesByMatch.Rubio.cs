// Complete the sockMerchant function below.
static int sockMerchant(int n, int[] ar) {
    int pairs = 0;
    for(int i=0; i<n; i++)
    {
        if(ar[i] != 0)
        {
            for(int j=i+1; j<n; j++)
            {
                if(ar[i]==ar[j])
                {
                    pairs++;
                    ar[i] = 0;
                    ar[j] = 0;
                    break;
                }
            }
        }
    }
    return pairs;
}
