# my solution
def list(names)
  name_array = names.map {|x| x[:name]}
  if name_array.length == 1
    name_array.join('')
  elsif name_array.length == 0
    ""
  else 
    last = name_array.pop
    name_array.join(', ') + ' & ' + last
  end
end 

# best solution
def list names
  names = names.map { |name| name[:name] }
  last_name = names.pop
  return last_name.to_s if names.empty?
  "#{names.join(', ')} & #{last_name}"
end