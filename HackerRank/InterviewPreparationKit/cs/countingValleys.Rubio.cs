public static int countingValleys(int steps, string path)
    {
        char[] charPath = path.ToCharArray();
        int stepsD = 0;
        int valleys = 0;
        bool currentV = false;
        
        for(int i=0;i<steps;i++)
        {
            if(charPath[i].Equals('U'))
            {
                stepsD++;
            }
            else
            {
                stepsD--;
            }
            
            if(stepsD == -1 && !currentV)
            {
                valleys++;
                currentV = true;
            }
            else if(stepsD == 0 && currentV)
            {
                currentV = false;
            }
        }
        return valleys;
    }
