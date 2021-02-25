// NOTE: rename the file to jumping_on_cloud.rs or main.rs to compile.

fn jumping_on_cloud(clouds: &[i32]) -> Option<i32> {
    let mut i: usize = 0;
    let mut count: i32 = 0;

    while i < clouds.len() - 1 {
        i = match clouds[i] {
            0 => {
                count += 1;

                if i + 2 < clouds.len() {
                    i + 2
                } else {
                    i + 1
                }
            }
            1 => i - 1,
            _ => return None,
        };
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
        .collect::<Vec<_>>()
        .iter()
        .map(|x| x.parse::<i32>().unwrap())
        .collect();

    println!("{}", jumping_on_cloud(&clouds).unwrap());
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_jumping_on_clouds() {
        let clouds: Vec<i32> = vec![0, 0, 1, 0, 0, 1, 0];
        assert_eq!(Some(4), jumping_on_cloud(&clouds));

        let clouds: Vec<i32> = vec![0, 0, 0, 0, 1, 0];
        assert_eq!(Some(3), jumping_on_cloud(&clouds));
    }
}
