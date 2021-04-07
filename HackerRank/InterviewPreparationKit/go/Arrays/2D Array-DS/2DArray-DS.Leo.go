// Complete the hourglassSum function below.

func hourglassSum(arr [][]int32) int32 {
	i, j := 0, 0
	var list []int32

	// Para recorrer un array de 2 dimenciones, se necesitan 2 loops anidados
	for i < 4 {
		for j < 4 {
			value := arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] +
				arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
			list = append(list, value)
			j++
		}
		j = 0
		i++
	}
	// Ordeno para encontrar el mayor valor
	sort.Slice(list, func(a, b int) bool { return list[a] > list[b] })
	return list[0]
}
