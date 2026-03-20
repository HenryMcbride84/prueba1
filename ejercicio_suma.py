

def sumaNumeros(misNumeros,resultado):
    contador=0

    for x in range(len(misNumeros)):

       # print(f"[ {misNumeros[x]} ], ",end="")
        #contador +=1

        for y in range (1,len(misNumeros)):
            #print(f"[ {misNumeros[y]} ], ",end="")
            if(misNumeros[x]+misNumeros[y] == resultado):
                listaSuma=[]
                listaSuma.append(x)
                listaSuma.append(y)
                return listaSuma
            
            contador +=1
        print("\n")

    return "NO se encontro resultado"

    print(f"contador= {contador}")

myList=[3,3]
resultado= 6

print( sumaNumeros(myList,resultado))