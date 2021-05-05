// Complete the minimumSwaps function below.

func minimumSwaps(arr_ []int32) int32 {
	// creo una copia del `arr` para evitar sobrescribir el array original
	arr := make([]int32, len(arr_))
	copy(arr, arr_)

	var count int32 = 0
	for i := 0; i < len(arr); i++ {
		// comparo el valor actual, con el valor que
		// tendría que tener en esa posición
		if arr[i] > int32(i + 1) {
			// busco el valor `i + 1` en `arr[j]` que
			// tengo que tener en la posición `i`
			for j := i; j < len(arr); j++ {
				if arr[j] == int32(i + 1) {
					tmp := arr[i]
					arr[i] = arr[j]
					arr[j] = tmp
					count += 1
				}
			}
		}
	}
	return count
}
