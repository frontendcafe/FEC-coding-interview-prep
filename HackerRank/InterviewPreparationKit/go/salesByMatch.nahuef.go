// Complete the sockMerchant function below.
func sockMerchant(n int32, ar []int32) int32 {
    var pairs int32
    socks := map[int32]int32{}
    
    for _, n := range ar {
        if _, ok := socks[n]; ok {
            pairs++
            delete(socks, n)
        } else {
            socks[n] = 1
        }
    }
    
    return pairs
}
