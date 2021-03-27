# Complete the minimumBribes function below.

def minimumBribes(q):
    # genero un array ordenado
    queue = list(range(1, len(q)))

    countBribes = 0
    for i in range(0, len(q)):
        # si el valor modificado es mas grande que el comienza ordenado
        # hubo algun tipo de soborno y entro
        if q[i] > queue[i]:
            # si el valor coincide incrementando solo 1 posición, se sobornó
            # a 1 persona, y hago un swap entre los dos valores
            if q[i] == queue[i+1]:
                v = queue[i]
                queue[i] = q[i]
                queue[i+1] = v
                countBribes += 1
            # si el valor coincide incrementando 2 posiciones, se sobornó a 2 personas,
            # y hago un swap respetando el orden de estos tres valores
            elif q[i] == queue[i+2]:
                v1 = queue[i]
                v2 = queue[i+1]
                queue[i] = q[i]
                queue[i+1] = v1
                queue[i+2] = v2
                countBribes += 2
            # si ninguna de las condiciones anteriores coincide, una persona soborno
            # mas de 2 veces, e imprimo `Too chaotic`
            else:
                print("Too chaotic")
                return

    print(countBribes)
