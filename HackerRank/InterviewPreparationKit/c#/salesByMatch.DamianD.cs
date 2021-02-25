static int sockMerchant(int n, int[] ar) {
    //Un dictionary es un hashmap
    Dictionary<int,int> map = new Dictionary<int,int>();
    int cont = 0;
    foreach(var num in ar)
    {
        //Si el dictionary no contiene la clave del numero, lo agrego
        if (!map.ContainsKey(num)) map.Add(num, 1);
        else map[num]++; //Caso contrario le sumo uno
        if (map[num] % 2 == 0) cont++; //Y si es par la cantidad de medias en cada num, sumo 1 al contador
    }
    return cont;

}