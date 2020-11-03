#my solution
def panagram?(string)
  ('a'..'z').all? { |l| string.downcase.include? (l) }
end

#best solution

def panagram?(string)
  ('a'..'z').all? { |x| string.downcase.include? (x) } 
end