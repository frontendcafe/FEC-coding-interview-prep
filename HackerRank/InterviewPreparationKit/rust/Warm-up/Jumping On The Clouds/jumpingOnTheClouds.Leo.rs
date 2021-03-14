// NOTE: rename the file to jumping_on_cloud.rs or main.rs to compile.

fn jumping_on_the_cloud(clouds: &[i32]) -> Option<i32> {
    let mut i: usize = 0;
    let mut count: i32 = 0;

    // no lo dice explicitamente el ejercicio, pero dedusco que la
    // primera nube y la ultima son siempre 0, si no nunca podés
    // comenzar o llegar al final
    while i < clouds.len() - 1 {
        if clouds[i] == 0 {
            // verifico que el i + 2 no sea mas grande que el
            // tamaño del array, si no, incremento i en 1
            if (i + 2) < clouds.len() {
                i += 2;
            } else {
                i += 1;
            }
            // cuento si caigo en un 0
            count += 1;
        } else {
            // si caigo en 1, y decremento en 1
            i -= 1;
        }
    }
    Some(count)
}

fn main() {
    let mut buffer = String::new();
    for _ in 0..2 {
        std::io::stdin().read_line(&mut buffer).unwrap();
    }

    let input: Vec<&str> = buffer
        .trim()
        .split("\n")
        .collect();

    let clouds: Vec<i32> = input[1]
        .split_whitespace()
        .map(|x| x.parse::<i32>().unwrap())
        .collect();

    println!("{}", jumping_on_the_cloud(&clouds).unwrap());
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_jumping_on_clouds() {
        let clouds: Vec<i32> = vec![0, 0, 1, 0, 0, 1, 0];
        assert_eq!(Some(4), jumping_on_the_cloud(&clouds));

        let clouds: Vec<i32> = vec![0, 0, 0, 0, 1, 0];
        assert_eq!(Some(3), jumping_on_the_cloud(&clouds));
    }
}
