def bubble_sort(lista):
    n = len(lista)

    contador =0
    
    for i in range(n):
        for j in range(0, n-1):
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]
            contador+=1 
        print(f"Vuelta {i}\n lista{lista}")
    print(f"Procesos totales {contador}")
    return lista


numeros=[8,3,5,1,6,2,4,9,7]
print(f"Lista inicial {numeros}")
print(f"Lista ordenada:  ")
print(bubble_sort(numeros))




