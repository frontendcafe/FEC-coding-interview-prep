// Complete the rotLeft function below.

func rotLeft(a []int32, d int32) []int32 {
	var rotatedArray []int32

	for i := 0; i < len(a); i++ {
		value := a[(i+int(d))%len(a)]
		rotatedArray = append(rotatedArray, value)
	}
	return rotatedArray
}
