# my solution
def alphabet_position(text)
  text.gsub(/[^a-zA-Z]/, '').downcase.bytes.map{|b| b - 96}.join(" ")
 end

# best solution

def alphabet_position(text)
  text.gsub(/[^a-z]/i, '').chars.map{ |c| c.downcase.ord - 96 }.join(' ')
end